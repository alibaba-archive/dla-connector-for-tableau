(function dsbuilder(attr)
{
    var params = {};

    params["Server"] = attr["server"];
    params["Port"] = attr["port"];
    params["Database"] = attr["dbname"];
    params["Uid"] = attr["username"];
    params["Password"] = attr["password"];
    params["SslMode"] = "none";
    
    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    return formattedParams;
})
