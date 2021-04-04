[<img src="https://i.imgur.com/a856gth.png" width="400" />](https://web2solutions.github.io/voodux/code/index.html)


#  voodux - Vue && Vuex Demo 

Vue application demo leveraging the [voodux](https://github.com/web2solutions/voodux) as it underlying architecture to handle it data.

- Vue Router
- Lazy loadding components

It uses [Bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) as UI framework.

## Implementation note:

This is just one example to demonstrate an integration leveraging Vuex and Voodux.

In the store, the mutations are triggered by voodux events. It could be different, by eliminating the events setup and placing the mutations commit inside actions, which is a simplest solution.

The VooduX events are being used to illustrate a large environment which possibly could have a lot of side effect being propagated in response to a data change.

Also, the states are being prepopulated inside store's parent scope. The best practices tells to do things like that by dispatching `actions`.

### Demo app

[Check the online demo](https://voodux-vue-vuex-demo.vercel.app/)

Check the documentation for this demo - TODO


<img src="https://i.imgur.com/dSSh7xq.png" width="600" />

### voodux Docs

[Project](https://github.com/web2solutions/voodux)

[Code Documentation](https://web2solutions.github.io/voodux/code/index.html)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
