/*
 * A component that holds the inventory of products loaded from Stripe
 * and makes it available for the whole site.
 */
import React, { createContext, useContext } from "react";

const Context = createContext();

export const useCrumbs = () => {
  // When compiling, context can be empty, which means that components
  // trying to destruct to retrieve the "crumbs" field will fail.
  const x = useContext(Context);
    return x ?? {crumbs: [] };
}



export function crumbsToQueryString(crumbs) {
  const params = {};
  var i = 0;
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

  for (let value of crumbs) {
    if (value.link) {
      params[letters[i++]] = value.link;
    } 
    if (value.label) {
      params[letters[i++]] = value.label;
    } 
  }

  return new URLSearchParams(params).toString();
}

export function queryStringToCrumbs(query) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const params = new URLSearchParams(query);
  var i = 0;
  var crumb = null;
  const crumbs = []

  for (let letter of letters) {
    const value = params.get(letter);

    if (value) {
      if (crumb) {
        crumb.label = value;
        crumbs.push(crumb);
        crumb = null;
      } else {
        crumb = { link: value };
      }
    }
  }

  // The last element should have a label, but not a link
  if (crumb) {
    crumbs.push({ label: crumb.link });
  }

  return crumbs
}

const BreadcrumbProvider = (props) => {
  const { crumbs, children } = props;

  const exposed = {
    crumbs
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export default BreadcrumbProvider;