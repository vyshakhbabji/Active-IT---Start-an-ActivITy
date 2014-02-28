/*
 * Service settings
 */
var ActiveFriend_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "523e4ba6e4b038f7ef2dd288"
}

/*
 * Services
 */

var ActiveFriend_ActiveCollectionNew_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_ActiveCollectionNew_update_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_ActiveCollectionNew_read_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_ActiveCollectionNew_create_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_read_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_create_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_delete_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage/{object_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_update_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage/{object_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_ActiveCollectionNew_query_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_query_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_ActiveCollectionNew_list_service = new Appery.RestService({
    'url': '{database_url}/collections/ActiveCollectionNew',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_EventStorage_list_service = new Appery.RestService({
    'url': '{database_url}/collections/EventStorage',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_login_service = new Appery.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_logout_service = new Appery.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': ActiveFriend_settings
});

var ActiveFriend_signup_service = new Appery.RestService({
    'url': '{database_url}/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': ActiveFriend_settings
});