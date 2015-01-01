<html>
<head>
<style>
html, body{margin:0;padding:0}
img{display:inline}
p {margin:0;color:#484;text-align:left}
i {display:block;color:#844;text-align:left}
div{vertical-align:top;overflow:hidden;display:inline-block;width:92px;padding:4px;text-align:center;font-size:20px;min-height:150px}
{{extracss}}
</style>
<title>{{title}}</title>
</head>
<body>
{{#each browsers~}}
<div>
<img src="{{../assets}}{{@key}}.png" />
{{#each .}}
{{#if .}}<p>&#x2713;{{@key}}</p>{{else}}<i>&#x2717;{{@key}}</i>{{/if}}
{{/each}}
</div>
{{~/each}}
</body>
</html>
