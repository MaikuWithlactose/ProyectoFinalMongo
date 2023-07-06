const express = require('express');
const mongoose = require("mongoose");
const Profesional = require('../models/profesional');
const router = express.Router();

// GET /profesionales. Obtiene toda la colección de profesionales.
router.get('/', (req, res) => {
  Profesional.find({}).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).json({ err: 'Error interno del servidor' });
  });
});

// GET /profesionales/Chris/Hemsworth. Obtiene los datos del profesional cuyo nombre y apellido se pasan como parámetro.
router.get('/:name/:lastName', (req, res) => {
  const { name, lastName } = req.params;

  Profesional.findOne({ name: name, lastName: lastName }).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).json({ err: 'Error interno del servidor' });
  });
});

// POST /profesionales. Añade un nuevo profesional en la colección de profesionales.
router.post('/', (req, res) => {
  const { name, lastName, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo } = req.body;

  const profesional = new Profesional ({
    name: name,
    lastName: lastName,
    age: age,
    weight: weight,
    height: height,
    isRetired: isRetired,
    nationality: nationality,
    oscarsNumber: oscarsNumber,
    profession: profession,
    photo: photo
  });

  profesional.save().then((data) => {
    res.status(201).json({ message: 'Profesional añadido exitosamente' });
  }).catch((err) => {
    res.status(500).json({ err: 'Error interno del servidor' });
  });
});

// PUT /profesionales. Modifica los datos de un profesional por su nombre.
router.put('/:nameParam', (req, res) => {
  const { nameParam } = req.params;
  const { name, lastName, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo } = req.body;
  Profesional.updateOne({ name: nameParam }, {
    name: name,
    lastName: lastName,
    age: age,
    weight: weight,
    height: height,
    isRetired: isRetired,
    nationality: nationality,
    oscarsNumber: oscarsNumber,
    profession: profession,
    photo: photo
  }).then((data) => {
    res.status(200).json({ message: 'Profesional actualizado exitosamente' });
  }).catch((err) => {
    res.status(500).json({ err: 'Error interno del servidor' });
  });
});

// DEL /profesionales. Elimina a un profesional de la lista por su nombre.
router.delete('/:name', (req, res) => {
  const { name } = req.params;

  Profesional.deleteOne({ name: name }).then((data) => {
    res.status(200).json({ message: 'Profesional eliminado exitosamente' });
  }).catch((err) => {
    res.status(500).json({ err: 'Error interno del servidor' });
  });
});

module.exports = router;
