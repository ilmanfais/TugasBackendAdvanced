const db = require("../models");
const Mahasantri = db.mahasantris;

exports.create = (req, res) => {
    const mahasantri = {
        nama: req.body.nama,
        asal: req.body.asal,
        umur: req.body.umur,
        telepon: req.body.telepon,
    };

    Mahasantri.create(mahasantri)
        .then((data) => {
            res.json({
                message: " Data Mahsantri Berhasil ditambahkan",
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message:
                    err.message || "Data Mahsantri Gagal ditambahkan",
            });
        });
};

exports.index = (req, res) => {
    Mahasantri.findAll()
        .then((data) => {
            res.json({
                message: "Data Mahsantri Berhasil ditampilkan",
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message:
                    err.message || "Data Mahsantri Gagal ditampilkan",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Mahasantri.update(req.body, {
        where: { id: id },
    })
        .then((data) => {
            res.json({
                message: "Data Mahsantri Berhasil diupdate",
                data: data,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message:
                    err.message || "Data Mahsantri Gagal diupdate",
            });
        });
}

exports.destroy = (req, res) => {
    const id = req.params.id;
    Mahasantri.destroy({
      where: { id: id },
    })
      .then((data) => {
        res.json({
          message: "Data Mahasantri berhasil dihapus",
          data: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Data Mahasantri Gagal dihapus",
        });
      });
  };