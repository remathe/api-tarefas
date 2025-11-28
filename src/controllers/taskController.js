const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ error: 'ID inválido' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao atualizar' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    return res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (error) {
    return res.status(400).json({ error: 'Erro ao deletar' });
  }
};
