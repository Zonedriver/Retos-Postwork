var logger = 
{
    name: "Logger Helper",
    log: function(message)
    {
        console.log(this.name + ":", message);
    }
};

//logger.log("Hello World!"); // Logger Helper: Hello World!

var magic = ["abra","kadabra","alakazan"]

magic.forEach(logger.log.bind(logger))