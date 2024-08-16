//

// Async Storage

jest.mock('@react-native-async-storage/async-storage', () => {
  return require('@react-native-async-storage/async-storage/jest/async-storage-mock');
});

// App

import { Db } from './db';

describe('Db', () => {
  type V = {
    a?: number;
    b?: number;
    c?: number;
  };

  it('Set does not throw', async () => {
    // Arrange
    const k = 'k';

    const v: V = {
      a: 1,
      b: 2,
      c: 3,
    };

    // Act
    const act = async () => await Db.set(k, v);

    // Assert
    expect(act).not.toThrow();
  });

  it('Get returns the expected result', async () => {
    // Arrange
    const k = 'k';

    const v: V = {
      a: 1,
      b: 2,
      c: 3,
    };

    await Db.set(k, v);

    // Act
    const r = await Db.get<V>(k, {});

    // Assert
    expect(r).toEqual(v);
  });

  it('Get does not throw', async () => {
    // Arrange
    const k = 'k';

    const v: V = {
      a: 1,
      b: 2,
      c: 3,
    };

    await Db.set(k, v);

    // Act
    const act = async () => await Db.get<V>(k, {});

    // Assert
    expect(act).not.toThrow();
  });

  it('Remove', async () => {
    // Arrange
    const k = 'k';

    const v: V = {
      a: 1,
      b: 2,
      c: 3,
    };

    await Db.set(k, v);

    // Act
    await Db.remove(k);

    // Assert
    const r = await Db.get<V>(k, {});

    expect(r).toEqual({});
  });

  it('Remove does not throw', async () => {
    // Arrange
    const k = 'k';

    const v: V = {
      a: 1,
      b: 2,
      c: 3,
    };

    await Db.set(k, v);

    // Act
    const act = async () => await Db.remove(k);

    // Assert
    expect(act).not.toThrow();
  });
});
