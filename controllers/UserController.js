
import UserModel from '../models/User.js';


export const login = async (req, res) => {

  try{  

    const doc = new UserModel({
      name: req.body.name,
      password: req.body.password,
    })
  
    const user = await doc.save();
  
    res.json({
    doc
    });
  } 
  catch (err){
    console.log(err)
    res.status(500).json({
      message: 'Не удалось зарегаться'
    })
  }
}

export const getAll = async (req, res) => {
  try{
    const posts = await UserModel.find().exec();
    res.json(posts)

  } catch(err) {
    console.log(err)
    res.status(500).json({
      message: 'Не удалось получить статьи'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const removedPost = await UserModel.findOneAndRemove({ _id: postId }).exec();

    if (!removedPost) {
      return res.status(404).json({
        message: 'Статья не найдена',
      });
    }

    res.json({
      message: 'Статья успешно удалена',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить статью',
    });
  }
};
