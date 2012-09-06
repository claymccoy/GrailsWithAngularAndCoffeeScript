<!doctype html>
<html>
<head>
  <title>Google Phone Gallery</title>
  <meta name="layout" content="main">
</head>
<body>

<div class="container-fluid">
  <div class="row-fluid">
    <div class="span2">
      <!--Sidebar content-->

      Search: <input name="query" ng-model="query">
      Sort by:
      <select name="orderProp" ng-model="orderProp">
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
      </select>

    </div>
    <div class="span10">
      <!--Body content-->

      <ul class="phones">
        <li ng-repeat="phone in phones | filter:query | orderBy:orderProp" class="thumbnail">
          <a ng-href="${createLink(action: 'show')}/{{phone.id}}" class="thumb">
            <img ng-src="${resource(dir: "images/phones/")}{{phone.imageUrl}}">
          </a>
          <p class='phoneName'>{{phone.name}}</p>
          <p>{{phone.snippet}}</p>
        </li>
      </ul>

    </div>
  </div>
</div>

</body>
</html>