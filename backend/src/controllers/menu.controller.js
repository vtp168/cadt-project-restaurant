import Menu from "../models/Menu.js";

export const getMenus = async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
};

export const createMenu = async (req, res) => {
  const menu = await Menu.create(req.body);
  res.json(menu);
};

export const updateMenu = async (req, res) => {
  const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(menu);
};

export const deleteMenu = async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message: "Menu deleted" });
};
