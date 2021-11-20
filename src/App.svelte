<script>
	import Router from 'svelte-spa-router'
	/* import {wrap} from 'svelte-spa-router/wrap' */

	import Home from './routes/Home.svelte'
	import NotFound from './routes/NotFound.svelte'

	const routes = {
    '/': Home,
    // '/book': wrap({ asyncComponent: () => import('./routes/Book.svelte') }),
    '*': NotFound,
	}
</script>

<Router {routes}/>

<style global>
:root {
    --acc: #fe4e05;
    --bg: #ffffff;
    --fg: #1e1814;
    --mg: #dfdfdf;
    --debug: #FF00FF;

    --space-1: 1rem;
    --space-2: 2rem;
    --space-3: 4rem;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, "NerdFont";
}

/* :global(body) { background: grey; } */

.spacer { flex-grow: 1; }
.debug { background: var(--debug); }

.pa1 { padding:         var(--space-1); }
.px1 { padding-left:    var(--space-1); padding-right:  var(--space-1); }
.py1 { padding-top:     var(--space-1); padding-bottom: var(--space-1); }
.pr1 { padding-right:   var(--space-1); }
.pl1 { padding-left:    var(--space-1); }
.pt1 { padding-top:     var(--space-1); }
.pb1 { padding-bottom:  var(--space-1); }

.pa2 { padding:         var(--space-2); }
.px2 { padding-left:    var(--space-2); padding-right:  var(--space-2); }
.py2 { padding-top:     var(--space-2); padding-bottom: var(--space-2); }
.pr2 { padding-right:   var(--space-2); }
.pl2 { padding-left:    var(--space-2); }
.pt2 { padding-top:     var(--space-2); }
.pb2 { padding-bottom:  var(--space-2); }

.pa3 { padding:         var(--space-3); }
.px3 { padding-left:    var(--space-3); padding-right:  var(--space-3); }
.py3 { padding-top:     var(--space-3); padding-bottom: var(--space-3); }
.pr3 { padding-right:   var(--space-3); }
.pl3 { padding-left:    var(--space-3); }
.pt3 { padding-top:     var(--space-3); }
.pb3 { padding-bottom:  var(--space-3); }

.ma1 { margin:          var(--space-1); }
.mx1 { margin-left:     var(--space-1); margin-right:  var(--space-1); }
.my1 { margin-top:      var(--space-1); margin-bottom: var(--space-1); }
.mr1 { margin-right:    var(--space-1); }
.ml1 { margin-left:     var(--space-1); }
.mt1 { margin-top:      var(--space-1); }
.mb1 { margin-bottom:   var(--space-1); }

.ma2 { margin:          var(--space-2); }
.mx2 { margin-left:     var(--space-2); margin-right:  var(--space-2); }
.my2 { margin-top:      var(--space-2); margin-bottom: var(--space-2); }
.mr2 { margin-right:    var(--space-2); }
.ml2 { margin-left:     var(--space-2); }
.mt2 { margin-top:      var(--space-2); }
.mb2 { margin-bottom:   var(--space-2); }

.ma3 { margin:          var(--space-3); }
.mx3 { margin-left:     var(--space-3); margin-right:  var(--space-3); }
.my3 { margin-top:      var(--space-3); margin-bottom: var(--space-3); }
.mr3 { margin-right:    var(--space-3); }
.ml3 { margin-left:     var(--space-3); }
.mt3 { margin-top:      var(--space-3); }
.mb3 { margin-bottom:   var(--space-3); }
</style>
