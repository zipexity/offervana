module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    yearbuilt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    homesqft: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    bathrooms: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stories: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    garagespots: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    wastesystem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    unitAC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    well: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hoa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    agelock: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    walkpantry: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    popcornceil: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gatedcom: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    chemcontam: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foundationIss: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solarpanels: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extraroom: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extralive: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ktapply: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    island: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    newcabinets: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tileBackSplash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ktRemod: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ktcondition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doubleSink: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    graniteTile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sepTub: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tiledShowers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updatedFloors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bathremod: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    masterbathcondition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    interiorpaintcondition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    wallcolor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    frontlandscape: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    backlandscape: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    yardfence: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    powerlines: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bbq: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    coveredPatio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    firepit: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gazebo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pavers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rvgate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sportCourt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sprinklers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facade: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    homestatus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    listed: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    builder: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    time: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    crownmold: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eightfeetdoor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extrahasnone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plantationshutter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recesseddoor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tenfeetceil: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    twoinchblind: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vaultedceil: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    countertype: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    carpet: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hardwood: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    laminate: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    otherfloortype: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tile: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tileQual: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetQual: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodQual: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateQual: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    tileLocationKitchen: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    tileLocationLivingroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    tileLocationMbathroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    tileLocationMbedroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    tileLocationOther: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodLocationKitchen: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodLocationLivingroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodLocationMbathroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodLocationMbedroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    hardwoodLocationOther: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetLocationKitchen: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetLocationLivingroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetLocationMbathroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetLocationMbedroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    carpetLocationOther: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateLocationKitchen: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateLocationLivingroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateLocationMbathroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateLocationMbedroom: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    laminateLocationOther: {
      type: DataTypes.TEXT,
      allowNullNull: true
    },
    rooftype: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foundus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refrigerator: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dishwasher: { type: DataTypes.TEXT, allowNull: true },
    stove: { type: DataTypes.TEXT, allowNull: true },
    waterheater: { type: DataTypes.TEXT, allowNull: true },
    washerdryer: { type: DataTypes.TEXT, allowNull: true },

    spaTub: { type: DataTypes.TEXT, allowNull: true },
    inGroundpool: { type: DataTypes.TEXT, allowNull: true },
    communitypool: { type: DataTypes.TEXT, allowNull: true },

    doubleOven: { type: DataTypes.TEXT, allowNull: true },
    sepCookTop: { type: DataTypes.TEXT, allowNull: true },
    buildinMicro: { type: DataTypes.TEXT, allowNull: true },
    wallOven: { type: DataTypes.TEXT, allowNull: true },

    clientAgent: { type: DataTypes.TEXT, allowNull: true },

    extRepaint: { type: DataTypes.TEXT, allowNull: false },

    mainfloorReplace: { type: DataTypes.TEXT, allowNull: false },

    applyRemod: { type: DataTypes.TEXT, allowNull: true },
    countertopRemod: { type: DataTypes.TEXT, allowNull: true },
    cabinetRemod: { type: DataTypes.TEXT, allowNull: true },
    userConcerns: { type: DataTypes.TEXT, allowNull: true }
  });

  Survey.associate = function(models) {
    // We're saying that a Survey should belong to an User
    // A Survey can't be created without a User due to the foreign key constraint
    Survey.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Survey;
};
