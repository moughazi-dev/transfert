import { DocumentCategory } from "../document-category.model";

export class DocumentData {

    id!: number;
    date!: string;
    file!: File;
    type_file!: DocumentCategory; 
    file_name!: string;
}


