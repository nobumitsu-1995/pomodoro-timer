import CustumConfig from '../../src/models/custumConfig'
import '../../src/main'

beforeEach(async () => {
  await CustumConfig.deleteMany({})
})

describe('Save Data of CustumConfig Model', () => {
  it('it should save one CustumConfig with correct params', (done) => {
    const CustumConfigParams = {
      uid: 'uid',
      workTime: 30,
      restTime: 30,
      cycle: 3,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).toBe(1)
            expect(result[0].uid).toBe('uid')
            expect(result[0].workTime).toBe(30)
            expect(result[0].restTime).toBe(30)
            expect(result[0].cycle).toBe(3)
            expect(result[0].longRestTime).toBe(30)
            expect(result[0].cycleToLongRestTime).toBe(2)
            done()
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  })

  it('it should save one CustumConfig without longRestTime', (done) => {
    const CustumConfigParams = {
      uid: 'uid',
      workTime: 30,
      restTime: 30,
      cycle: 3,
      longRestTime: null,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).toBe(1)
            expect(result[0]).toHaveProperty('_id')
            expect(result[0]).toHaveProperty('uid')
            expect(result[0]).toHaveProperty('workTime')
            expect(result[0]).toHaveProperty('restTime')
            expect(result[0]).toHaveProperty('cycle')
            expect(result[0]).toHaveProperty('cycleToLongRestTime')
            expect(result[0].uid).toBe('uid')
            expect(result[0].workTime).toBe(30)
            expect(result[0].restTime).toBe(30)
            expect(result[0].cycle).toBe(3)
            expect(result[0].cycleToLongRestTime).toBe(2)
            done()
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  })

  it('it should save one CustumConfig without cycleToLongRestTime', (done) => {
    const CustumConfigParams = {
      uid: 'uid',
      workTime: 30,
      restTime: 30,
      cycle: 3,
      longRestTime: 30,
      cycleToLongRestTime: null,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).toBe(1)
            expect(result[0]).toHaveProperty('_id')
            expect(result[0]).toHaveProperty('uid')
            expect(result[0]).toHaveProperty('workTime')
            expect(result[0]).toHaveProperty('restTime')
            expect(result[0]).toHaveProperty('cycle')
            expect(result[0]).toHaveProperty('longRestTime')
            expect(result[0].uid).toBe('uid')
            expect(result[0].workTime).toBe(30)
            expect(result[0].restTime).toBe(30)
            expect(result[0].cycle).toBe(3)
            expect(result[0].longRestTime).toBe(30)
            done()
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  })

  it('it should not save one CustumConfig without uid', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: 30,
      restTime: 30,
      cycle: 3,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })

  it('it should not save one CustumConfig without workTime', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: null,
      restTime: 30,
      cycle: 3,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })

  it('it should not save one CustumConfig without restTime', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: 30,
      restTime: null,
      cycle: 3,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })

  it('it should not save one CustumConfig without cycle', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: 30,
      restTime: 30,
      cycle: null,
      longRestTime: 30,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).toHaveProperty('message')
        done()
      })
  })
})
