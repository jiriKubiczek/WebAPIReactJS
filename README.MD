# Jak na to

Nahral jsem tri slozky:

1) MyAPI - zde je source code pro WEB API cast

2) React-app tady je react apka pro CRUD operace

3) Publish - tady jsem knihovna pro spusteni web api

## Instalace

Stahni si k sobe na lokal komplet zip balik z github a rozbal. Po rozbaleni najdes u vyse popsanych slozek taky start.bat file. Staci doubleclick a spusti se ti jak web api vytvoreny v .net tak taky react appka - mel by se ti otevrit prohlizec se strankou localhost://3000 - muzes zacit vytvaret Customera.


Ze ti jede web api, zjistis taky tak, ze si v prohlizeci otevres stranku localhost://5000/api/api, nejdrive ale musis spustit start.bat

Pak by si mel by si mel videt prazdne pole:

```bash
[]
```

Myslim, ze ovladani je intuitivni. Pro zjednoduseni jsem nepouzil databazi, ale neni problem doplnit. Pri vytvareni Zakaznika (Customer) pouzivam Id, coz by databaze delala automaticky, ale tady se mi to hodilo pro snadnejsi vyhledani zakaznika apod. 