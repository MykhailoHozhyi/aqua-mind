import * as waterServices from '../services/water.js';
import createHttpError from 'http-errors';

export const getWaterController = async (req, res) => {
  const { _id: userId } = req.user;
  const data = await waterServices.getWaterRecords({ userId });
  res.json({ status: 200, message: 'Successfully found water records!', data });
};

export const getWaterByIdController = async (req, res) => {
  const { waterId } = req.params;
  const { _id: userId } = req.user;
  const data = await waterServices.getWaterRecord({ _id: waterId, userId });
  if (!data) {
    throw createHttpError(404, 'Water record not found');
  }
  res.json({
    status: 200,
    message: `Successfully found water record with id ${waterId}!`,
    data,
  });
};

export const addWaterController = async (req, res) => {
  const { _id: userId } = req.user;
  const data = await waterServices.addWater({
    ...req.body,
    userId,
  });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a water record!',
    data,
  });
};

export const updateWaterController = async (req, res) => {
  const { waterId } = req.params;
  const { _id: userId } = req.user;
  const data = await waterServices.updateContact(waterId, userId, {
    ...req.body,
  });
  if (!data) {
    throw createHttpError(404, 'Water record not found');
  }
  res.json({
    status: 200,
    message: 'Successfully patched a water record!',
    data,
  });
};

export const deleteWaterController = async (req, res) => {
  const { waterId } = req.params;
  const { _id: userId } = req.user;
  const data = await waterServices.deleteContact(waterId, userId);

  if (!data) {
    throw createHttpError(404, 'Water record not found');
  }
  res.status(204).send();
};
