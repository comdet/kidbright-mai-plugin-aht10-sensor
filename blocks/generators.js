python.pythonGenerator.forBlock['aht10_init'] = function(block, generator) {
  var value_address = generator.valueToCode(block, 'address', python.Order.ATOMIC);
  generator.definitions_['import_AHT10'] = 'import AHT10';
  generator.definitions_['aht10'] = 'aht10 = AHT10.AHT10('+value_address+')';
  var code = '\n';
  return code;
};

python.pythonGenerator.forBlock['aht10_read'] = function(block, generator) {
  var dropdown_name = block.getFieldValue('NAME');
  var code = 'aht10.readData("'+dropdown_name+'")';
  return [code, python.Order.ATOMIC];
};