# Proyecto Currency Bird

## Cómo levantar el proyecto

Para esto debes tener cualquier versión de node 16 instalada con el alias 16, para el manejo de versiones yo uso `nodenv`, también debes tener instalado `yarn`.

Para instalar todas las librerías pertinentes:

`yarn install`

Para correr las migraciones del proyecto:

`npx prisma migrate dev`

Para correr el proyecto de manera local debes correr:

`yarn dev`

Esto utiliza ts-node-dev que ve los cambios que se realizan en el proyecto y los compila.

Para la base de datos se utiliza un ORM llamado prisma el cuál contiene vistas las cuales puedes correr localmente con el siguiente comando:

`npx prisma studio`.

Para configurar la url de la api de currency bird puedes utilizar el archivo `.env` o crear un `.env.local`. Debes rellenar el campo `BASE_API_URL` con la url que necesites(como un string).


## Documentación de la api.

La api cuenta con solo un endpoint.

* Endpoint: /payments
* Método: POST
* Body:

  ```
  {
    transferCode: 'email@gmail.com', 
    amount: 4999
  }
  ```

No utiliza headers de autorización por el momento, pero sería bueno que lo hiciera.

Luego de crear un payment, este se guarda en la base de datos, por lo que si actualizas la url en que se corrió prisma studio, se vería reflejado este cambio.
