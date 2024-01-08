import React, { useEffect, useState } from 'react'
import { Editor } from './Editor';

const EditorProvider = () => {
    const [versionA, setVersionA] = useState("");
    const [versionB, setVersionB] = useState("");

    useEffect(() => {
        setTimeout(() => {
            const originalValue = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
	        const modifiedValue = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
            setVersionA(originalValue);
            setVersionB(modifiedValue);
        }, 1000);
    }, []);
  return (
    <div hidden={!versionA && !versionB}>
        <Editor versionA={versionA} versionB={versionB} />
    </div>
  )
}

export default EditorProvider
