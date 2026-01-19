import conf from '../conf/conf'
import { Client, Databases, ID,Storage,Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost(title,slug,content , featredimage, status , userId){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featredimage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log('Appwrite Sevice :: createpost :: error', error);
            
        }
    }

        async updatePost(slug,{title,content , featredimage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featredimage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite Sevice :: updatePost :: error', error);
            
        }
    }

        async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log('Appwrite Sevice :: deletePost :: error', error);
            
            return false
        }
    }
    
    async getPost(slug){
        try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            
        )
            
        } catch (error) {
            console.log('Appwrite Sevice :: getPost :: error', error);
            
        }
    }
    

  async getPosts(queries = [Query.equal("status" , "active")]){
        try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            // [
            //     Query.equal('status' , 'active')
            // ]
            queries,
            
        )
            
        } catch (error) {
            console.log('Appwrite Sevice :: getPosts :: error', error);
            return false
            
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log('Appwrite Sevice :: uploadFile :: error', error);
        }
    }
    
    async deleteFile (fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true 
        } catch (error) {
            console.log('Appwrite Sevice :: deleteFile :: error', error);
            return false
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();

export default service