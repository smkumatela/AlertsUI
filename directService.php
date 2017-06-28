<?php

function callService($parameters, $class = "")
{
  $method = $parameters['method'];

  unset($parameters['class']);
  unset($parameters['method']);
  
  $envsettings = envSetting($class);
  $endpointUrl = $envsettings['serviceUrl'];

  $client = new SoapClient($endpointUrl,
    array(
      "trace"      => 1,		// enable trace to view what is happening
      "exceptions" => 0,		// disable exceptions
      "cache_wsdl" => 0) 		// disable any caching on the wsdl, encase you alter the wsdl server
  );
  //error_log(" :START: Method is: ".$method.", Parameters Is ".json_encode($parameters)." :END: ", 3, 'C:/Users/quentinl.AWARDS.CO.ZA/Development/logs/params.log');
  $jsonResponse = json_encode($client->$method($parameters));
 
  echo $jsonResponse;
  
  return true;
}

function envSetting($class)
{
  $settings = array();
  if($class == "")
  {
    $settings['serviceUrl'] = getenv("ALERTSERVICE");
  }
  return $settings;
}

function parameterBind($params)
{
  $parArray = array();
  $ignoreArray = array('id', '_dc');


  foreach ($params as $key => $value) {
    if(!in_array($key, $ignoreArray))
    {
      $parArray[$key] = $value;
    }
  }

  return $parArray;
}
callService(parameterBind($_GET));