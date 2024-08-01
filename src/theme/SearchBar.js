import React from "react";
import AskCookbook from "@cookbookdev/docsbot/react";
import SearchBar from '@theme-original/SearchBar';

// It's a public API key, so it's fine to just hardcode it here
const COOKBOOK_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWVmYWQ0ZGViNTUzM2NmODA2OTEzNTAiLCJpYXQiOjE3MTAyMDYyODUsImV4cCI6MjAyNTc4MjI4NX0.On3TXz2PyBdt-JnPaoPSm4MqbLJrliKCRPzjUClCGRM"

export default function SearchBarWrapper(props) {
  return (
    <>
       <SearchBar {...props} />
      <AskCookbook apiKey={COOKBOOK_API_KEY} />
    </>
  );
}
