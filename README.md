# Tailwind CSS Components for React - TailGrids React

TailGrids React is **Tailwind UI Components for React** Web Projects. This version is free open-source **TailGrids Core that coded specifically for React**, so anyone can use TailGrids Tailwind CSS components with your React projects flawlessly.

TailGrids React comes with all the essential UI components and elements you need to kickstart a new web project based on ReactJS and Tailwind CSS. This entire React + Tailwind CSS UI library - is coded using Tailwind CSS utility classes and crafted in a way that will provide the best possible developer experience.

[![tailgrids-react](https://cdn.tailgrids.com/tailgrids-react.png)](https://github.com/TailGrids/tailgrids-react)

So, if you're already familiar with Tailwind CSS and looking for a well-designed **React UI library**, TailGrids is the perfect choice.

### [🚀 Explore All Components](https://tailgrids.com/components)

### [🌏 Visit Website](https://tailgrids.com)

### [📃 TailGrids React Documentation](https://tailgrids.com/docs/react)

# Getting Started

**Step #1:** Install Tailwind CSS and generate the config file.

Open the command terminal, then run the code below ( Skip this step if you have already set up Tailwind CSS in your project )

```shellscript copy
npm install -D tailwindcss
npx tailwindcss init
```

**Step #2:** Install TailGrids

Next, install TailGrids by running the following command:

```shellscript copy
npm i tailgrids
```

**Step #3:** Update the Configuration

Now, update your tailwind.config.js file to include the TailGrids plugin. Add the following code snippet:

```javascript filename="tailwind.config.js" showLineNumbers copy
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
```

**Step #4**: Add Tailwind CSS directives to your CSS.

Create a CSS file named `**index.css**` in the **/src** directory. Then, include this code at the top of the file.

```css copy
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step #5:** Start the build process

Finally, start the build process for your React project:

```shellscript copy
npm run start
```

That's it! Browse and start using the [TailGrids React component](/components/react-link) in your React project.

## TailGrids-React : Tailwind CSS + React UI Components

[![sneak-peek](https://cdn.tailgrids.com/tailgrids-components.svg)](https://tailgrids.com/components)

## Changelog

### version 2.0

-Dark mode added
-Polished components
-Added few core components
-Update dependency packages

## 👥 Community

#### [💬 Chat Us on Discord](https://pimjo.com/discord)

#### [🙌 Let's Connect on Twitter](https://twitter.com/tailgrids)

## 💙 Support

You can always support this project and inspire us by **Starring🌟 This Repository**
and sharing with friends. If you like the the library consider purchasing [**⚡ TailGrids Pro**](https://tailgrids.com/pricing) to get access to all available premium components.

## 🎁 License

TailGrids React is **100% Free! and open-source** so you can use it with your personal or commercial projects also redistribute with your projects.
