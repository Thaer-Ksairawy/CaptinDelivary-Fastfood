import path from 'path'
const __dirname = process.cwd()

export const site = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/Home" , "index.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const menu = async (req, res) => {
    const siteMessge = {message:'site is not available !'}
    try {
       res.sendFile(path.join(__dirname + "/public/menu" , "menu.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}