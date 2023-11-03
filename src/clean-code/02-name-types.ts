(() => {

    // arreglo de temperaturas celsius - centigrade temperatures
    const tempetureCelsius = [33.6, 12.34];
    //TemperaturasCelsius

    // Dirección ip del servidor
    const  serverIp= '123.123.123.123';
    //direccionIpServervidor

    // Listado de usuarios
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    //users

    // Listado de emails de los usuarios
    const userEmails = users.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false; 
    const canRun = true;
    const hasItems = false;
    const IsLoading = false;
    

    // Otros ejercicios
    // tiempo inicial
    const beginTime = new Date().getTime();
    //timeOfTheBegin
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - beginTime;
    //timeAtTheEnd


    // Funciones
    // Obtiene los libros
    //getBooks
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();




