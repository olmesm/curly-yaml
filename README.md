```yaml
api: &api countries.com

env:
  API_KEY: "default value"

requests:
  allCountries:
    url: *api
    path: /all
    data:
      page: 1
    headers:
      content-type: application/json
```
