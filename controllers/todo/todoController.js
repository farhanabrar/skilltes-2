const { success, fail }= require("../../config/response");
const { todo } = require("../../models");

exports.getTodo = async (req,res) => {
    try{
        const data = await todo.findAll();
        res.json(success({msg:"data todo berhasil di terima ", data}));
    }catch (error) {
        res.json(fail({ msg: error }));
    }
    
};

exports.createTodo = async (req, res) => {
    if(!body.rencana){
        try {
            const data = await todo.create(req.body);
            res.json(success ({msg: "data todo berhasil di tambah", data}));
        } catch (error) {
            res.json(fail({ msg: error }));
        } 
    }else{
        if(!body.waktu_mulai){
            try {
                const data = await todo.create(req.body);
                res.json(success ({msg: "data todo berhasil di tambah", data}));
            } catch (error) {
                res.json(fail({ msg: error }));
            } 
        }else{
            res.json(fail({ msg: "rencana sudah ada pada hari tersebut"}));
        }
    }
};

exports.updateTodo = async ({ body }, res ) => {
    if(!body.id) res.json(fail({msg : "data tidak di temukan"}));
    try {
        const payload = body;
        const data = await todo.update(payload, {
            where: {
              id: body.id,
            }
          });
          if (data) res.json(success({ msg: "data todo berhasil di ubah", data}));        
          else res.json(fail({msg: "data todo gagal diupdate"}));
        }catch(error){
        res.json(fail({ msg: error }));
    }
};

exports.deleteTodo = async ({ body }, res) => {
    if(!body.id) res.json(fail({msg : "data tidak di temukan"}));
    try {
        const data = await todo.destroy({
            where: {
                id: body.id,
              },
        });
        if (data) res.json(success({msg: "data todo berhasil di delete", data})) ;   
        else res.json(fail({msg: "data todo gagal di hapus"}));
    } catch (error) {
        res.json(fail({ msg: error}));
        
    }
}