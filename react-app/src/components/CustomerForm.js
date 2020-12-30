import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/customer";
import { useToasts } from "react-toast-notifications";


const styles = theme => ({
        root: {
                "& .MuiTextField-root": {
                        margin: theme.spacing(1),
                        minWidth: 230
                }
        },
        smMargin: {
                margin: theme.spacing(1),
                minWidth: 80
        }
})

const initialFieldValues = {
        id: '',
        fullName: '',
        address: '',
        email: '',
        age: '',
        mobil: ''
}

const CustomerForm = ({ classes, ...props }) => {

        //toast msg
        const { addToast } = useToasts()

        const validate = (fieldValues = values) => {
                let temp = { ...errors }
                if ('id' in fieldValues)
                        temp.id = fieldValues.id ? "" : "This field is required."
                if ('fullName' in fieldValues)
                        temp.fullName = fieldValues.fullName ? "" : "This field is required."
                if ('address' in fieldValues)
                        temp.address = fieldValues.address ? "" : "This field is required."
                if ('email' in fieldValues)
                        temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
                setErrors({
                        ...temp
                })

                if (fieldValues == values)
                        return Object.values(temp).every(x => x == "")
        }

        const {
                values,
                setValues,
                errors,
                setErrors,
                handleInputChange,
                resetForm
        } = useForm(initialFieldValues, validate, props.setCurrentId)

        const handleSubmit = e => {
                e.preventDefault()
                if (validate()) {
                        const onSuccess = () => {
                                resetForm()
                                addToast("Submitted successfully", { appearance: "success" })
                        }

                        if (!props.customerList.find(x => x.id == props.currentId))
                                props.createCustomer(values, onSuccess)

                        else
                                props.updateCustomer(props.currentId, values, onSuccess)
                }
        }

        useEffect(() => {
                if (props.currentId !== 0) {
                        setValues({
                                ...props.customerList.find(x => x.id === props.currentId)
                        })
                        setErrors({})
                }
        }, [props.currentId])

        return (
                <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
                        <Grid container>
                                <Grid item xs={6}>
                                        <TextField name="id" variant="outlined" label="Id" value={values.id} onChange={handleInputChange} {...(errors.id && { error: true, helperText: errors.id })}></TextField>
                                        <TextField name="fullName" variant="outlined" label="Full Name" value={values.fullName} onChange={handleInputChange} {...(errors.fullName && { error: true, helperText: errors.fullName })}></TextField>
                                        <TextField name="address" variant="outlined" label="Address" value={values.address} onChange={handleInputChange} {...(errors.address && { error: true, helperText: errors.address })}></TextField>
                                </Grid>
                                <Grid item xs={6}>
                                        <TextField name="email" variant="outlined" label="Email" value={values.email} onChange={handleInputChange} {...(errors.email && { error: true, helperText: errors.email })}></TextField>
                                        <TextField name="age" variant="outlined" label="Age" value={values.age} onChange={handleInputChange}></TextField>
                                        <TextField name="mobil" variant="outlined" label="Mobil" value={values.mobil} onChange={handleInputChange}></TextField>
                                        <div>
                                                <Button variant="contained" color="primary" type="submit" className={classes.smMargin}>Submit</Button>
                                                <Button variant="contained" className={classes.smMargin} onClick={resetForm}>Reset</Button>
                                        </div>
                                </Grid>
                        </Grid>
                </form>
        );
}

const mapStateToProps = state => ({
        customerList: state.customer.list
})

const mapActionToProps = {
        createCustomer: actions.create,
        updateCustomer: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CustomerForm));