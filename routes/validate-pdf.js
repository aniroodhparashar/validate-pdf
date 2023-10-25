const pdfParser = require("pdf-parse");
const express = require("express");
const multer = require("multer");
const router =new express.Router()

const upload = multer({
    // limits:{
    //     // fileSize:1000000
    // },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(pdf)$/)){
            return cb(new Error('Please upload a valid PDF file. '))
        }

        cb(undefined, true)

    }
})

/**
 * @swagger
 * /validate-pdf:
 *  post:
 *      summary: Validate PDF file
 *      description: This API checks whether a PDF file uploaded contains a blank page or not
 *      consumes:
 *        - multipart/form-data
 *      parameters:
 *        - in: formData
 *          name: pdf
 *          type: file
 *          description: The PDF file to upload.
 *          required: true
 *      responses:
 *          200:
 *             description: PDF is valid
 *          400:
 *             description: Invalid PDF file uploaded
 *
 */
router.post('/validate-pdf',upload.single('pdf'),async (req,res) =>{

    try{
        if(!req.file){
            return res.status(400).json({
                error:"No PDF file uploaded"
            })
        }
        const pdfBuffer = req.file.buffer
        const data = await pdfParser(pdfBuffer)

        /*check if any pages are empty*/

        let blankPageCount = 0
        const pageTexts = data.text
        // Split text by 'Page ' to identify page breaks
        const splitContent =pageTexts.split('\n\n')

        //remove first element
        splitContent.shift()


        for(value of splitContent ){
            if(value ==='' || value=='undefined') {
                blankPageCount++;
                break;
            }
        }


        if(blankPageCount > 0){
            res.status(400).json({error:`PDF is invalid.`})
        }else{
            res.status(200).json({message:'PDF is valid'})
        }
    }catch (error) {
        console.log(error)
        res.status(500).json({error:'An error occured while validating the PDF'})

    }

})

module.exports = router

