# Rocketseat Next Level Week - 3


### Back-end do Happy
 - Happy é uma aplicação que foi desenhanda pensando no dia das crianças, permite que orfanatos se cadastrem e especifiquem regras de visitação para que visitantes não sejam pegos de surpresa :)


# Executando o projeto
### Configuração
```bash
Node versão 12
yarn versão 1
```
### Executando o projeto
```bash
yarn typeorm migrations:run
yarn dev
```

# API

### POST
```json
/orphanages

{
  "name": "name",
  "latitude": -24.95255,
  "longitude": -53.461597,
  "about": "about",
  "instructions": "instructions",
  "opening_hours": "8-18",
  "open_on_weekends": true //bollean
  }

Response 201

{
  "id": 1
}
```

### GET

```json
/orphanages
[
  {
    "id": 1,
    "name": "name",
    "latitude": -24.95255,
    "longitude": -53.461597,
    "about": "about",
    "instructions": "instructions",
    "opening_hours": "8-18",
    "open_on_weekends": true, //bollean
    "images": [
      {
        "id": 1,
        "path": "http://localhost:3333/uploads/1602626490193-1c831c7846355d24fcab205e6e2f7655.png"
      },
    ]
  },
]
```

### GET

```json
/orphanages/:id

{
  "id": 1,
  "name": "name",
  "latitude": -24.95255,
  "longitude": -53.461597,
  "about": "about",
  "instructions": "instructions",
  "opening_hours": "8-18",
  "open_on_weekends": true, //bollean
  "images": [
    {
      "id": 1,
      "path": "http://localhost:3333/uploads/1602626490193-1c831c7846355d24fcab205e6e2f7655.png"
    },
  ]
}

```


