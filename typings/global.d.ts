/// <reference types="node" />
/*/// <reference path="./src/global.d.ts" />  SHOULD I NEED IT? */ 

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  declare module '*.module.less' {
    const classes: { [key: string]: string };
    export default classes;
  }