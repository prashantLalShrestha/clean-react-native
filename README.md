# Clean React Native

A sample project demostrating CLEAN architecture in react native app. It follows the modular approach using `Yarn Workspaces` implementing `Clean Architecture` + `MVVM` with MobX.

Applying clean architecture to a react codebase brings lots of benefits, most of them you can find by simply googling what's clean architecture and what should we adopt architectural patterns.

One advantage that strikes me is having business rules isolated from framework-specific things. This means that our core logic is not coupled to React, React Native, Express, etc...  
This gives you enough flexibility to, for example, move specific parts of the application to a backend, change libraries without too much pain, test once and reuse as many times as you want, share code between React and React Native applications, among others.

> ⚠️ Please notice that I'm not saying this is the _right_ way to do React Native. This is just an approach which could be useful on larger codebases, where on small projects it may be an overshoot.

## Key features

- React Native app with [Typescript](https://www.typescriptlang.org/)
- Modular + [Monorepo approach](https://www.kpiteng.com/blogs/yarn-workspaces-monorepo-approach/) using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [CLEAN Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Flow coordinator](https://khanlou.com/2015/01/the-coordinator/) pattern
- [react-nativation](https://reactnavigation.org/docs/getting-started)
- [MVVM](https://github.com/prashantLalShrestha/clean-react-native/tree/main/packages/frontend/mobile/ui/src/splash)
- State Management with [MobX](https://mobx.js.org/react-integration.html)

## CLEAN Architecture

<p align="center">
  <img src="https://github.com/prashantLalShrestha/clean-react-native/blob/main/images/CleanArchitecture.jpg" alt="Diagram"/>
</p>

The nomenclature may vary, but the concept behind this architectural pattern is: the domain dictates how tools should be organized and not the other way around. What I mean by that is that we should organize our codebase around the business rules and not around the frameworks we use to achieve business rules.

The diagram above shows how the dependency rule works, the inner circles must not know about the outer circles. That is, there cannot be an import of a use case within an entity, or import of a framework within a use case.

Another important rule is: entities and use cases should not rely on external libraries. The explanation is simple, the core of our application must be robust enough and malleable enough to meet the demands of the business without needing any external intervention.

If by chance, an essential part of the application core MUST BE an external dependency. Dependency needs to be modeled following [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).

## MVVM

<p align="center">
  <img src="https://github.com/prashantLalShrestha/clean-react-native/blob/main/images/MVVMPattern.png" alt="Diagram"/>
</p>

## Project Structure

```
./packages
├── frontend
│   └── mobile
│       ├── app - Main react-native app
│       │   ├── di
│       │   ├── flow
│       │   ├── navigation
│       │   └── App.tsx
│       ├── base
│       ├── res - contains all the resources required, including colors, images, fonts, strings, etc.
│       │   ├── assets
│       │   └── R - index.ts similar to android
│       ├── ui - contains feature ui modules
│       │   └── feature
│       │       ├── di
│       │       ├── flow
│       │       ├── navigation
│       │       ├── screens
│       │       └── viewmodels
│       └── views - reusable view components
└── modules
    └── services
        ├── domain
        │   ├── common
        │   ├── model
        │   └── repositories - interfaces
        ├── platform
        │   ├── contract
        │   │  ├── remote - interfaces
        │   │  └── store - interfaces
        │   └── repositories - implementation
        ├── remote
        │   ├── common
        │   ├── api-client + endpoint
        │   └── remote - implementation
        └── store
            ├── common
            ├── model
            └── store - implementation
```

## Running the apps

run `yarn` under the root of the project, and then run `yarn ios:pods`.
