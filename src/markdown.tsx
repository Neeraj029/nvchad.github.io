import { Dynamic, Show } from "solid-js/web";
import type { MDXProps } from "solid-marked";
import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import hljs from "highlight.js";

import "highlight.js/styles/base16/onedark.css";

import {
  activeContext_Heading,
  generateActiveContext,
  setActiveContext_Heading,
} from "./components/Docs";

// eslint-disable-next-line import/prefer-default-export
export function useMDX(): MDXProps {
  return {
    builtins: {
      Heading(props) {
        return (
          <Dynamic component={`h${props.depth}`}>
            {props.children}
          </Dynamic>
        );
      },
      Paragraph(props) {
        return (
          <p>
            {props.children}
          </p>
        );
      },
      Root(props) {
        const [contextHeadings, setHeadings] = createStore([]);

        // filter out all h2 elements for Context SideBar
        createEffect(() => {
          let docs = document.querySelector(".DocContent")?.childNodes;
          let result: Array<Array<string>> = [];

          docs?.forEach((item: any) => {
            if (item.localName == "h2" || item.localName == "h3") {
              item.id = item.innerText;
              result.push([item.localName, item.innerText]);
            }
          });

          setHeadings(result);
          generateActiveContext();
        });

        function generateStyles(x: any) {
          const labelStyles = "border-l-2 p-1 px-5";
          let styles = activeContext_Heading() == x[1]
            ? `${labelStyles} border-purple-300 bg-purple-100 text-purple-800 dark:border-blue-300 dark:text-blue-300 dark:bg-tintBlack2`
            : `${labelStyles} dark:border-tintBlack3 text-darkgrey`;
          return x[0] == "h3" ? `pl-9 ${styles}` : `${styles}`;
        }

        return (
          <div class="grid grid-cols-[1fr_auto] p-5">
            <div class="DocContent" id="DocContent">
              {props.children}
            </div>

            <div class="pt-10 sticky h-[calc(100vh-4rem)] top-16">
              <div class="h-fit grid">
                <h4 class='text-lg font-medium pb-2 pl-5 dark:border-tintBlack3 border-l-2'> On this page </h4>
                {contextHeadings.map((x) => (
                  <a
                    href={"#" + x[1]}
                    class={generateStyles(x)}
                    onclick={() => setActiveContext_Heading(x[1])}
                  >
                    {x[1]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      },
      Blockquote(props) {
        return (
          <blockquote>
            <div class="bg-white">
              {props.children}
            </div>
          </blockquote>
        );
      },
      Image(props) {
        return <img src={props.url} alt={props.alt ?? props.title} />;
      },

      Code(props) {
        let ref: any;

        createEffect(() => hljs.highlightElement(ref));

        return (
          <pre
            ref={ref}
            class={props.lang ? `language-${props.lang}` : "language-bash"}
          >
            {props.children}
          </pre>
        );
      },
      InlineCode(props) {
        return <code>{props.children}</code>;
      },
      List(props) {
        return (
          <Dynamic component={props.ordered ? "ol" : "ul"} start={props.start}>
            {props.children}
          </Dynamic>
        );
      },
      ListItem(props) {
        return (
          <li>
            <Show when={"checked" in props} fallback={props.children}>
              <input type="checkbox" checked={props.checked} />
              {props.children}
            </Show>
          </li>
        );
      },
      Link(props) {
        return <a href={props.url} title={props.title}>{props.children}</a>;
      },
    },
  };
}
