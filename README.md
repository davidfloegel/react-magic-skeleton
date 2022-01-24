# React Skeleton

> A Skeleton component that can be wrapped around your content and works out of the box.

React Skeleton works by measuring the content it's been given. It then toggles an animated
block based on a flag and returns the content when loading has finished.

This approach solves one main problem:

**Building use-case specific loading skeletons quickly becomes out of date and is unscalable**.

![Demo](https://cdn.loom.com/sessions/thumbnails/6d18d0ece64e4ea2bb6ed4e3378a08ce-with-play.gif)

## Installation

```
# Yarn
yarn add davidfloegel/react-skeleton

# Npm
npm install davidfloegel/react-skeleton
```

## Usage

### <Skeleton />

The `<Skeleton>` component is what you need to wrap around your component. For example:

```js
<Skeleton isLoading={loading}>
  <Avatar src="user.jpg" />
</Skeleton>

<Skeleton isLoading={loading}>
  <Button>Sign up</Button>
</Skeleton>
```

You can also wrap multiple elements into one `Skeleton` which helps de-cluttering the code a little.

```js
<Skeleton isLoading={loading}>
  <Title>Sign up</Title>
  <Text>Please click below to continue</Text>

  <Button>Click to continue</Button>
</Skeleton>
```

**Please note**: This is somewhat experimental.

### SkeletonProvider

If you have several Skeletons it quickly becomes tedious to pass in the `isLoading` flag into every
single instance.

Therefore, you can use the `SkeletonProvider` and set the `isLoading` flag once at a high level:

```js
<SkeletonProvider isLoading={loading}>
  <Skeleton>
    <Title>Sign up</Title>
  <Skeleton>

  <div>
    <Skeleton><UserImage src="image.jpg" /></Skeleton>
  </div>
</SkeletonProvider>
```

## FAQ

### How do I deal with content coming from an API?

This is a good question as you as the consumer don't necessarily know what this content is going
to look like.

My favourite approach is to build a re-usable component for the final data display and wrap certain
elements within inside a `Skeleton`. I can then use the same component to display a few mocked
loading blocks _and_ the final content.

Have a look in the example, where I'm using exactly that approach.
