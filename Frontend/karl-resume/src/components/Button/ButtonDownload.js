import React from 'react';
import {Button} from '@material-ui/core';

import {saveAs} from 'file-saver';
import {pdf, Document, Page, Text} from '@react-pdf/renderer';
import {useState} from 'react';
import {pdfjs} from 'react-pdf';
import './Button.css'

import PDF from '../../utils/Karl_Doudy_Angrand_Resume.pdf';


const DocumentPdf = ({someString}) => {

    pdfjs.GlobalWorkerOptions.workerSrc =  
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return(
    <Document file='../../utils/Ibrahim_Cv_21.pdf'
    onLoadSuccess={onDocumentLoadSuccess} >
      <Page pageNumber={pageNumber} >
      <Text>Hey look at this string: {someString}</Text>
      </Page>
    </Document> 
  )
    
    
};
  
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  
  async function getProps() {
    await delay(1_000);
    return ({
      someString: 'You waited 1 second for this',
    });
  }

const CustomButtonDownload = ({text, icon}) => {
    return(
        <Button className='custom_btn' endIcon={icon ? 
        (<div className='btn_icon_container'> {icon}</div>) : null} 
        
        onClick={async () => {
            const props = await getProps();
            const doc = <DocumentPdf {...props} />;
            const asPdf = pdf([]); // {} is important, throws without an argument
            asPdf.updateContainer(doc);
            const blob = await asPdf.toBlob();
            saveAs(blob, 'CV_document.pdf');
          }}
        >
            <span className='btn_text'>{text}</span> 
        </Button>
    )
}
export default CustomButtonDownload