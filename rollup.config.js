import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";

const config = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "ReactHotMarquee",
    sourcemap: true,
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      module: "ESNext",
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    nodeResolve(),
    commonjs(),
    postcss({
      extract: "react-hot-marquee.css",
    }),
    uglify(),
  ],
};

export default config;
