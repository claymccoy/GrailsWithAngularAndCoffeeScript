<!doctype html>
<html lang="en" ng-app="phonecat">
	<head>
      <meta name="pageId" content="${controllerName}.${actionName}" />
      <title><g:layoutTitle/></title>
		<g:layoutHead/>
        <r:require modules="app"/>
        <r:layoutResources />
    </head>
    <g:set var="grailsParams" value="${params.collect{ it.key + '=\'' + it.value + '\''}.join('; ')}" />
    <body ng-init="${grailsParams}">
      <div ng-controller="${jsController}">
        <g:layoutBody/>
      </div>
      <r:layoutResources />
	</body>
</html>