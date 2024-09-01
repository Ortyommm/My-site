import React from "react";
import PropTypes from "prop-types";

export default function HTML(props: propTypes) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Yandex.Metrika counter */}
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(98214577, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        });`}}>
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/98214577" style={{position: 'absolute', left:-9999}} alt="" /></div></noscript>
        {/* /Yandex.Metrika counter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/images/icons/favicon.png"
          type="image/x-icon"
        />
        <title>Artem</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body.toString() }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

interface propTypes {
  htmlAttributes: Record<string, any>;
  headComponents: [];
  bodyAttributes: Record<string, any>;
  preBodyComponents: [];
  body: Record<string, any>;
  postBodyComponents: [];
}
