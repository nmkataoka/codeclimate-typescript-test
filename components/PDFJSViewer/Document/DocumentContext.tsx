import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
import { createContext, useContext } from 'react';

export type DocumentContextValue = { pdf: PDFDocumentProxy | undefined };

const DocumentContext = createContext<DocumentContextValue | undefined>(
  undefined
);

const DocumentContextProvider = DocumentContext.Provider;

const useDocument = (): DocumentContextValue => {
  const context = useContext(DocumentContext);
  if (context === undefined) {
    throw new Error(
      'useDocument must be used within a DocumentContextProvider'
    );
  }
  return context;
};

export { useDocument, DocumentContextProvider };
