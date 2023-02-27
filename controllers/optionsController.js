const Question = require('../models/question');
const Option = require('../models/option');
const { options } = require('../routes');

// adding vote to an option
module.exports.addVote = async function(req,res){
    try {
        const id = req.params.id;
        const option = await Option.findById(id);

        // increasing vote count
        option.votes = option.votes + 1;
        option.save();
        return res.status(200).json("vote added successfully : happy matdaan")
    } catch (error) {
        console.error(error);
    }
}

// deleting an option
module.exports.delete = async function(req,res){
    try {
        const id = req.params.id;
        const option = await Option.findById(id);

        // deleting the option if vote count = 0
        if(option.votes==0){

            const questionId = option.question;
            option.remove();
            const question = await Question.findById(questionId);
            await question.save();
            return res.status(200).json('Option deleted');

        }else{
            return res.status(405).json('Operation not allowed as option have non zero vote count!');
        }
    } catch (error) {
       console.log(error)
    }
}