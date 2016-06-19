package ee.mtiitson.gradeio.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.LinkedHashMap;
import java.util.Map;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum LabName {
    LAB_1(1, "Prototüüpimine paberil"),
    LAB_2(2, "Veebilehtede põhjad"),
    LAB_3(3, "Frustratsiooniliides"),
    LAB_4(4, "Kassid"),
    LAB_5(5, "Nurgelised kassid"),
    LAB_6(6, "Süntaktiliselt äge CSS"),
    LAB_7(7, "Nurgelised koerad"),
    LAB_8(8, "Django Sissejuhatus"),
    LAB_9(9, "Django Edasijuhatus"),
    LAB_10(10, "Kasutajatestid");

    private final String name;

    private final int id;

    LabName(int id, String name) {
        this.id = id;
        this.name = name;
    }

    private static final Map<Integer, LabName> BY_ID_MAP = new LinkedHashMap<>();
    static {
        for (LabName labName : LabName.values()) {
            BY_ID_MAP.put(labName.id, labName);
        }
    }

    @JsonCreator
    public static LabName forValue(int value) {
        return BY_ID_MAP.get(value);
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

}
