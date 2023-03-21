import CustumConfig from '../../src/models/custumConfig'
import '../../src/main'

beforeEach((done) => {
  CustumConfig.deleteMany({})
    .then(() => {
      done()
    })
    .catch((e) => {
      console.log(e)
      done()
    })
})

describe('Save Data of CustumConfig Model', () => {
  it('it should save one CustumConfig with correct params', (done) => {
    const CustumConfigParams = {
      uid: 'uid',
      workTime: 300,
      restTime: 300,
      cycle: 3,
      longRestTime: 300,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).to.eq(1)
            expect(result[0]).to.have.property('_id')
            expect(result[0]).to.have.property('uid')
            expect(result[0]).to.have.property('workTime')
            expect(result[0]).to.have.property('restTime')
            expect(result[0]).to.have.property('cycle')
            expect(result[0]).to.have.property('longRestTime')
            expect(result[0]).to.have.property('cycleToLongRestTime')
            expect(result[0].uid).to.eq('uid')
            expect(result[0].workTime).to.eq(300)
            expect(result[0].restTime).to.eq(300)
            expect(result[0].cycle).to.eq(3)
            expect(result[0].longRestTime).to.eq(300)
            expect(result[0].cycleToLongRestTime).to.eq(2)
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
      workTime: 300,
      restTime: 300,
      cycle: 3,
      longRestTime: null,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).to.eq(1)
            expect(result[0]).to.have.property('_id')
            expect(result[0]).to.have.property('uid')
            expect(result[0]).to.have.property('workTime')
            expect(result[0]).to.have.property('restTime')
            expect(result[0]).to.have.property('cycle')
            expect(result[0]).to.have.property('cycleToLongRestTime')
            expect(result[0].uid).to.eq('uid')
            expect(result[0].workTime).to.eq(300)
            expect(result[0].restTime).to.eq(300)
            expect(result[0].cycle).to.eq(3)
            expect(result[0].cycleToLongRestTime).to.eq(2)
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
      workTime: 300,
      restTime: 300,
      cycle: 3,
      longRestTime: 300,
      cycleToLongRestTime: null,
    }

    CustumConfig.create(CustumConfigParams)
      .then(() => {
        CustumConfig.find({})
          .then((result) => {
            expect(result.length).to.eq(1)
            expect(result[0]).to.have.property('_id')
            expect(result[0]).to.have.property('uid')
            expect(result[0]).to.have.property('workTime')
            expect(result[0]).to.have.property('restTime')
            expect(result[0]).to.have.property('cycle')
            expect(result[0]).to.have.property('longRestTime')
            expect(result[0].uid).to.eq('uid')
            expect(result[0].workTime).to.eq(300)
            expect(result[0].restTime).to.eq(300)
            expect(result[0].cycle).to.eq(3)
            expect(result[0].longRestTime).to.eq(300)
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
      workTime: 300,
      restTime: 300,
      cycle: 3,
      longRestTime: 300,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one CustumConfig without workTime', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: null,
      restTime: 300,
      cycle: 3,
      longRestTime: 300,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one CustumConfig without restTime', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: 300,
      restTime: null,
      cycle: 3,
      longRestTime: 300,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })

  it('it should not save one CustumConfig without cycle', (done) => {
    const CustumConfigParams = {
      uid: '',
      workTime: 300,
      restTime: 300,
      cycle: null,
      longRestTime: 300,
      cycleToLongRestTime: 2,
    }

    CustumConfig.create(CustumConfigParams)
      .then((CustumConfig) => {
        console.log(CustumConfig)
      })
      .catch((e) => {
        expect(e).to.have.property('message')
        done()
      })
  })
})
