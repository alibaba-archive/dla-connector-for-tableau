(function dsbuilder(attr)
{
    var params = {};

    params["Server"] = attr[connectionHelper.attributeServer];
    params["Port"] = attr[connectionHelper.attributePort];
    params["Database"] = attr[connectionHelper.attributeDatabase];
    params["Uid"] = attr[connectionHelper.attributeUsername];
    params["Password"] = attr[connectionHelper.attributePassword];
    params["SslMode"] = "none";
    
    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    return formattedParams;
})
