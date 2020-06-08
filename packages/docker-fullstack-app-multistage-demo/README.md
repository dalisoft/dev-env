# docker-fullstack-app-multistage-demo

nginx + nodejs + postgres - fullstack Docker multi-stage app example

## Features

### Backend

- High-performance backend with `nanoexpress`
- Live-reload on DEVELOPMENT mode for backend
- Lightweight `alpine` & `slim` version of `node:12` which builds fast
- Multi-stage, target build will be smaller
- Multi-env, both production and development are different

### Database

[See DB templates](https://github.com/dalisoft/docker-db-templates) for Docker for your next project

- Popular Postgres DB
- `Alpine` version, so build will be smaller
- Well structured folders within DB
- SQL folder

### Frontend

- nginx powered frontend
- Automatic restarting (no need restart container to see update)
- `Alpine` version, so build will be smaller

## Scripts

### Preparing for permission

#### `compose up`

- `chmod +x ./compose.up.dev.sh`
- `chmod +x ./compose.up.prod.sh`

#### `compose build`

- `chmod +x ./compose.build.dev.sh`
- `chmod +x ./compose.build.prod.sh`

### Running

- `./compose.up.dev.sh` - For DEVELOPMENT only, live-reload support on backend
- `./compose.up.prod.sh` - For PRODUCTION only, smaller target builds

### Build

- `./compose.build.dev.sh` - For DEVELOPMENT only, live-reload support on backend
- `./compose.build.prod.sh` - For PRODUCTION only, smaller target builds

## License

MIT
