import 'package:flutter/material.dart';
import 'package:kivicare_flutter/main/model/MedicalHistroyModel.dart';
import 'package:kivicare_flutter/main/utils/AppColors.dart';
import 'package:kivicare_flutter/main/utils/AppCommon.dart';
import 'package:nb_utils/nb_utils.dart';

class EncounterItemWidget extends StatelessWidget {
  final EncounterType? data;
  final Function? onTap;
  final bool isDeleteOn;

  EncounterItemWidget({this.data, this.onTap, this.isDeleteOn = true});

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      mainAxisAlignment: MainAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(data!.title.validate(value: languageTranslate('lblNoTitle')), style: primaryTextStyle()).expand(),
        10.width.visible(isDeleteOn),
        Icon(Icons.delete, color: primaryColor, size: 20).onTap(() => onTap?.call()).visible(isDeleteOn),
      ],
    ).paddingSymmetric(vertical: 8);
  }
}
