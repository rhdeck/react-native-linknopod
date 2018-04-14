# react-native-linknopod

React-Native plugin for ignoring .podspec files in linked modules.

## Why do I need this?

If you use `react-native-pod` for adding third-party CocoaPods, React-Native will want to link any future IOS module as a CocoaPod instead of a static library, if given the chance. This is really annoying when you are developing your RN code via static libraries.

## Usage

```
yarn add react-native-linknopod
react-native linknopod
```

## What about my prelink and postlink hooks?

They all work. I depend on them too.

## Why don't you PR this to the RN team?

Todo.
