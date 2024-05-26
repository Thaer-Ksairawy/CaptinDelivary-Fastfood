import express from "express";
import path from "path"

import{
site,
menu
} from "../controllers/site-controllers.js"


const SiteRouter = express.Router();
const __dirname = process.cwd()


const intialpath = path.join(__dirname, './public/Home');


SiteRouter.use(express.static(intialpath));
SiteRouter.get('/',site);

const intialpathMenu = path.join(__dirname, './public/menu');


SiteRouter.use(express.static(intialpathMenu));
SiteRouter.get('/menu',menu);

export default SiteRouter;