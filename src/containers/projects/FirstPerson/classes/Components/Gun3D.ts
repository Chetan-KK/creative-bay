import * as THREE from 'three';
import GUI from 'lil-gui';

import { UpdateInfo } from 'utils/sharedTypes';

import { InteractiveObject3D } from './InteractiveObject3D';

interface Constructor {
  gui: GUI;
}
export class Gun3D extends InteractiveObject3D {
  static swayAmount = 0.03;
  static maxSwayAmount = 0.3;
  static smoothAmount = 0.04;
  static startPosition = new THREE.Vector3(0.5, -0.5, -1.3);

  _gui: GUI;
  _gunGroup = new THREE.Group();
  _gun: THREE.Group | null = null;

  constructor({ gui }: Constructor) {
    super();
    this._gui = gui;
    this.add(this._gunGroup);
    this.setGunGroupPosition(Gun3D.startPosition);
    this._gunGroup.rotation.y = Math.PI * 0.5;
    this._setGui();
  }

  _setGui() {
    const gun = this._gui.addFolder('Gun');
    gun.close();
    gun.add(this._gunGroup.position, 'x', -5, 5, 0.1).name('posX');
    gun.add(this._gunGroup.position, 'y', -5, 5, 0.1).name('posY');
    gun.add(this._gunGroup.position, 'z', -5, 5, 0.1).name('posZ');
  }

  setAsset(item: THREE.Group) {
    this._gun = item;
    this._gun.scale.set(0.18, 0.18, 0.18);
    this._gunGroup.add(this._gun);
  }

  setGunGroupPosition(pos: THREE.Vector3) {
    this._gunGroup.position.copy(pos);
  }

  getPosition() {
    return this._gunGroup.position;
  }

  update(updateInfo: UpdateInfo) {
    super.update(updateInfo);
  }

  destroy() {
    if (this._gun) this._gunGroup.remove(this._gun);
    this.remove(this._gunGroup);
    super.destroy();
  }
}
