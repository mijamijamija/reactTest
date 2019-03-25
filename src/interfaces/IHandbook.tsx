import IHandbookContent from './IHandbookContent'

interface IHandbook {
    id: number;
    content: IHandbookContent;
    lastedited: string;
    logo: string;
  }

  export default IHandbook;