import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Validation, Validation__factory } from '../../typechain';
import { messageFromMessageEvent } from '../utils';
import { isDeepStrictEqual } from 'util';

export const validation = () => {
  let deployer1: SignerWithAddress,
    deployer2: SignerWithAddress,
    sender1: SignerWithAddress,
    sender2: SignerWithAddress;
  let validationInstance: Validation;
  let validationFactory: Validation__factory;

  beforeEach(async () => {
    [deployer1, deployer2, sender1, sender2] = await ethers.getSigners();
    validationFactory = await ethers.getContractFactory('Validation');
    validationInstance = await validationFactory.deploy();
  });

  it('Should deploy', async () => {
    const Validation = await ethers.getContractFactory('Validation');
    const validation = await Validation.connect(deployer2).deploy();
    await validation.deployed();
    expect(validation.address).to.be.properAddress;
  });

  it(`A 'Message' event is emitted whenever someone sends a message`, async () => {
    const message = 'Hello World';
    await expect(validationInstance.connect(sender1).sendMessage(message))
      .to.emit(validationInstance, 'Message')
      .withArgs(sender1.address, message);
  });

  it('Works well with stringify objects', async () => {
    const message = {
      name: 'Thang Le',
      age: 25,
      isMale: true,
      pets: ['dog', 'cat'],
      children: {
        Thom: '5 years old',
        Tho: '3 years old',
      },
    };

    const tx = await validationInstance.connect(sender1).sendMessage(JSON.stringify(message));
    const receipt = await tx.wait();
    const emittedMessage = messageFromMessageEvent(receipt.events);

    expect(isDeepStrictEqual(message, emittedMessage))
  });
};
